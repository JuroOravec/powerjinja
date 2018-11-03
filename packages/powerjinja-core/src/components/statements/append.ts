export const append = {
    withDo: (list, item) => `do ${list}.append(${item})`,
    withAppend: (list, item) => `append ${item} to ${list}`
}