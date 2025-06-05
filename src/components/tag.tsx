
export function TagLabel({name} : {name: string}) {
    return (
        <span className="bg-green-100 rounded-full px-2 py-1 text-sm font-semibold text-green-800 dark:bg-green-900 dark:text-green-300">
        {name}
        </span>
    );
}