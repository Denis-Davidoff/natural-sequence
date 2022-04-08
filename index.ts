
export const findSkippedNatural = function(v: Array<number>):Array<number> {
    let m: Array<boolean> = [];

    for (let i = 0; i < v.length; ++i) {
        if (v[i] <= 0) continue
        if (m.length + 1 < v[i]) m.length = v[i] + 1
        m[v[i]] = true
    }

    let res: Array<number> = []

    for (let i = 1; i < m.length; ++i) {
        if (!m[i]) res.push(i)
    }

    return res
}
