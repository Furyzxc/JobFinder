export interface MessageProps {
    text: string
}

export const Message = (props: MessageProps) => {

    return (
        <div>
            <div className="message user-message">
                <div className="avatar"></div>
                <div className="content">
                    <div className="text">Hello, how are you?</div>
                </div>
            </div>

            <div className="message assistant-message">
                <div className="avatar"></div>
                <div className="content">
                    <div className="text">{props.text}</div>
                </div>
            </div>

        </div>
    )
}