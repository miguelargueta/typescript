interface AbRequired {
    a: number;
    b: string
}

let ab: AbRequired = {
    a: 1,
    b: "test"
}

type WeakInterface<T> = {
    [K in keyof T]?: T[K]
}

let allOptionalType: WeakInterface<AbRequired> = {}
let allOptional: Partial<AbRequired> = {}
let allRequired: Required<AbRequired> = {
    a: 1,
    b: "test"
}

let readonlyVariable: Readonly<AbRequired> = {
    a: 1,
    b: "test"
}

// las propiedades ahora son de solo lectura
// readonlyVariable.a = 2

interface Abc {
    a: number;
    b: string;
    c: boolean;
}

let ac: Pick<Abc, "a" | "c"> = {
    a: 1,
    c: true
}

let recorderCd: Record<"c" | "d", number> = {
    c: 1,
    d: 2
}
