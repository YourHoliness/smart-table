import {rules, createComparison} from "../lib/compare.js";


export function initSearching(elements, searchField = 'search') {
    // @todo: #5.1 — настроить компаратор
    const compare = createComparison(
        ['skipEmptyTargetValues'],
        [rules.searchMultipleFields(searchField, ['date', 'customer', 'seller'], false)]
    )

    return (data, state) => {
        // @todo: #5.2 — применить компаратор
        if (typeof state[searchField] === 'string') {
            state[searchField] = state[searchField].trim()
        }
        return data.filter((row) => compare(row, state));
    }
}