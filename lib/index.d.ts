type Awaitable<T> = T | PromiseLike<T>;
type SideEffectsInfo = (ImportInfo | string)[] | ImportInfo | string | undefined;
interface ImportInfo {
    as?: string;
    name?: string;
    from: string;
}
interface ComponentInfo extends ImportInfo {
    sideEffects?: SideEffectsInfo;
}
type ComponentResolveResult = Awaitable<string | ComponentInfo | null | undefined | void>;
type ComponentResolverFunction = (name: string) => ComponentResolveResult;
interface ComponentResolverObject {
    type: 'component' | 'directive';
    resolve: ComponentResolverFunction;
}
export type ComponentResolver = ComponentResolverFunction | ComponentResolverObject;
/**
 * Resolver for View UI Plus
 * Work with unplugin-vue-components
 * @author Ricky email:zhangqingcq@foxmail.com
 * @created 2023.08.03
 */
export default function Index(): ComponentResolver;
export {};
