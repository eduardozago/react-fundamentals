export function Post(props) {
    console.log(props)
    return(<>
        <h2>{ props.author }</h2>
        <p>{ props.content }</p>
    </>)
}