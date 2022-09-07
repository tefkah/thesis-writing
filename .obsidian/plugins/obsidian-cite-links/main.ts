// 👀 taken from https://gist.github.com/nothingislost/23b6dbfcba6a48ad5e1c75e8bdee261f

import { Plugin, EventRef, TFile } from 'obsidian'
import {
	App,
	Editor,
	MarkdownView,
	Modal,
	Notice,
	PluginSettingTab,
	Setting,
} from 'obsidian'

declare module 'obsidian' {
	interface MetadataCache {
		initialized: boolean
		initialize(): void
		fileCache: {
			[filePath: string]: { hash: string; mtime: number; size: number }
		}
		uniqueFileLookup: {
			data: { [baseName: string]: TFile[] }
			add(key: string, value: TFile): void
		}
		metadataCache: { [hash: string]: CachedMetadata }
		linkResolverQueue: { add(file: TFile): void }
		getLinkSuggestions(): any[]
	}
}

export default class RelBuilderPlugin extends Plugin {
	private resolved: EventRef | undefined
	private resolve: EventRef | undefined

	async onload() {
		// wait for layout to be ready to perform the rest

		this.app.workspace.layoutReady
			? this.layoutReady()
			: //@ts-expect-error bad api i guess
			  this.app.workspace.on('layout-ready', () => this.layoutReady)

		if (!this.app.metadataCache.initialized) {
			this.resolved = this.app.metadataCache.on('resolved', () => {
				if (!this.resolved) return
				this.app.metadataCache.offref(this.resolved)
				//	console.log('Ephemeral cache has completed priming.')
				// perform any logic that should only happen once the empheral cache has been primed
			})
		} else {
			console.log('Plugin loaded after the ephemeral cache was primed.')
			// Perform any logic that would be needed due to missing the initial cache priming
			//
			// In this case, we'll do a full refresh on the link resolver cache so that we can have
			// a chance to act on all of the "resolve" events
			this.refreshLinkResolverCache()
		}

		this.registerEvent(
			// "resolve" is debounced by 2 seconds on any document change
			(this.resolve = this.app.metadataCache.on('resolve', (srcFile) => {
				//			console.log('Ephemeral cache hase been updated for: ' + srcFile.path)
				const mdCache = this.app.metadataCache
				const something = mdCache.resolvedLinks
				//		console.log(something)
				const cache = mdCache.getFileCache(srcFile)
				//	console.log(cache)
				let linkText = cache?.frontmatter?.parent
				// handle the yaml parser turning wikilinks into nested arrays
				// if we didn't receive an array, bail out
				if (!(linkText instanceof Array)) return
				linkText = [...linkText].flat(2).pop()
				// update the relevant link cache
				this.incrementLinkRefCount(linkText, srcFile)
				//		console.log('Parent Value: ' + linkText)
				//	console.log('Resolved Links: ', mdCache.resolvedLinks[srcFile.path])
				//console.log('Unresolved Links: ', mdCache.unresolvedLinks[srcFile.path])
			}))
		)
	}

	onunload(): void {
		if (!this.resolve) return
		// remove our resolve listener
		this.app.metadataCache.offref(this.resolve)
		// and refresh the cache so that our custom relationships are cleared out
		this.refreshLinkResolverCache()
		this.refreshLeaves()
	}

	incrementLinkRefCount(linkText: string, srcFile: TFile) {
		// borrowed most of this cache updating logic from @valentine195
		// reference: https://github.com/valentine195/obsidian-admonition/blob/b9ee5e1c084446b65d9c011b8d4b34569bbf72af/src/main.ts#L885
		//
		// update the relevant link resolver cache based on whether or not the linkText resolves to an actual file
		//2
		const mdCache = this.app.metadataCache
		let file = mdCache.getFirstLinkpathDest(linkText, '')
		let cache, path: string
		if (file && file instanceof TFile) {
			cache = mdCache.resolvedLinks
			path = file.path
		} else {
			cache = mdCache.unresolvedLinks
			path = linkText
		}
		// initialize the source file key, if not found
		if (!cache[srcFile.path]) {
			cache[srcFile.path] = {
				[path]: 0,
			}
		}
		// initialize the target link key, if not found
		let resolved = cache[srcFile.path]
		if (!resolved[path]) {
			resolved[path] = 0
		}
		// increment the target link value
		resolved[path] += 1
		cache[srcFile.path] = resolved
	}

	refreshLinkResolverCache = () => {
		// This will force a refresh of the link resolver cache
		// Logic was borrowed from the default Obsidian MetadataCache.initialize() method
		const mdCache = this.app.metadataCache
		const metadataCache = mdCache.metadataCache
		const fileCache = mdCache.fileCache
		let markdownFiles: { [path: string]: TFile } = {}
		let allLoadedFiles = this.app.vault.getAllLoadedFiles()

		for (let file of allLoadedFiles) {
			if (file instanceof TFile) {
				mdCache.uniqueFileLookup.add(file.name.toLowerCase(), file)
				markdownFiles[file.path] = file
			}
		}

		for (let filePath in fileCache) {
			const markdownFile = markdownFiles[filePath]
			const cacheEntry = fileCache[filePath]
			if (markdownFile && metadataCache.hasOwnProperty(cacheEntry.hash)) {
				mdCache.linkResolverQueue.add(markdownFile)
			}
		}
	}

	layoutReady = () => {
		// don't need the event handler anymore, get rid of it
		this.app.workspace.off('layout-ready', this.layoutReady)
		this.refreshLeaves()
	}

	refreshLeaves = () => {
		// re-set the editor mode to refresh the syntax highlighting
		this.app.workspace.iterateCodeMirrors((cm) => {
			console.log(cm)
		})

		this.app.workspace.iterateAllLeaves((leave) => {
			console.log(leave.view)
		})
	}
}

// Remember to rename these classes and interfaces!

interface MyPluginSettings {
	mySetting: string
}

const DEFAULT_SETTINGS: MyPluginSettings = {
	mySetting: 'default',
}
