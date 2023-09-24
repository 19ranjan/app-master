

function Message() {


    const name = '';
    if (name)
        return <div><h1>Hello {name}</h1></div>

    return (
    <div>
            <h1>Hello World</h1>
        </div>
    )
}

export default Message;