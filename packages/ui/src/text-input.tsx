interface PropType {
    placeholder: string
    size: "small" | "big"
    onChange?: any
}


export function TextInput({size, placeholder, onChange }: PropType) {
    return (
        <input
            onChange={onChange}
            placeholder={placeholder}
            style={{
                padding: size === "big" ? 15: 10,
                margin: size === "big" ? 15: 10,
                borderColor: "black",

            }}
        >
        </input>
    )
}
