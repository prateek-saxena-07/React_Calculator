export const Numpad = ({id,onClick}) =>
{
    return (
        <>
            <button id={id} onClick={onClick}>{id}</button>
        </>
    )
}