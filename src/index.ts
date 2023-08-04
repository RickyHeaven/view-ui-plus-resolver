import vNames from './components'
import matchComponents from './matchComponents'

type Awaitable<T> = T | PromiseLike<T>

function kebabCase(key: string) {
	const result = key.replace(/([A-Z])/g, ' $1').trim()
	return result.split(' ').join('-').toLowerCase()
}

type SideEffectsInfo = (ImportInfo | string)[] | ImportInfo | string | undefined

interface ImportInfo {
	as?: string
	name?: string
	from: string
}

interface ComponentInfo extends ImportInfo {
	sideEffects?: SideEffectsInfo
}

type ComponentResolveResult = Awaitable<string | ComponentInfo | null | undefined | void>

type ComponentResolverFunction = (name: string) => ComponentResolveResult

interface ComponentResolverObject {
	type: 'component' | 'directive'
	resolve: ComponentResolverFunction
}

export type ComponentResolver = ComponentResolverFunction | ComponentResolverObject

function getSideEffects(componentName: string) {
	const sideEffects = ['view-ui-plus/dist/styles/viewuiplus.css']
	
	if (/^poptip$|^tooltip$|^select$|^cascader$|^color-picker$|^date-picker$|^dropdown$|^menu$/.test(componentName)) {
		sideEffects.push('popper.js/dist/umd/popper.js')
	}
	if (/^table$|^slider$|^tab$|^grid$/.test(componentName)) {
		sideEffects.push('element-resize-detector')
	}
	if (componentName.startsWith('date-picker')) {
		sideEffects.push('js-calendar')
	}
	if (/^time$|^calendar$/.test(componentName)) {
		sideEffects.push('dayjs')
	}
	if (/^scroll$|^image-preview$|^grid$/.test(componentName)) {
		sideEffects.push('lodash.throttle')
	}
	if (componentName.startsWith('count-up')) {
		sideEffects.push('countup.js')
	}
	if (componentName.startsWith('numeral')) {
		sideEffects.push('numeral')
	}
	
	return sideEffects
}

/**
 * Resolver for View UI Plus
 * Work with unplugin-vue-components
 * @author Ricky email:zhangqingcq@foxmail.com
 * @created 2023.08.03
 */
export default function Index(): ComponentResolver {
	return {
		type: 'component',
		resolve: (name: string) => {
			const _n = kebabCase(name)
			if (name.match(/^[A-Z]/) && vNames.indexOf(_n) > -1) {
				const p = matchComponents.test(_n) ? _n : (_n + '/' + _n + '.vue')
				return {
					from: `view-ui-plus/src/components/${p}`,
					sideEffects: getSideEffects(_n)
				}
			}
		}
	}
}
