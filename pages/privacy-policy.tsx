
const PrivacyPolicy = () => {
    const bodyStyles = {
        backgroundColor: 'linen',
        padding: '1rem',
        border: '5px dotted black'
    };


    return (

        <div style={bodyStyles}>

            <h1>Privacy Policy</h1>

            <p>Last Updated: 22 Feb 2025</p>

            <ol>
                <li>
                    <h3>Introduction</h3>
                    <p>This privacy policy applies to the use of larvamferGPT on OpenAI’s platform. This GPT does not collect, store, or share any personal information.</p>
                </li>

                <li>
                    <h3>API Usage</h3>
                    <p>LarvamferGPT accesses a personal API to fetch data about larvamfers.
                        The API does not collect or store any user data; it is strictly for retrieving information in real time.
                        No user information is sent to or stored by the API.</p>
                </li>

                <li>
                    <h3>OpenAI Services</h3>
                    <p>This GPT operates within OpenAI’s ChatGPT platform, which has its own privacy policies governing AI interactions.
                        You can review OpenAI’s Privacy Policy <a href="https://openai.com/privacy">here</a>.</p>
                </li>

                <li>
                    <h3>Changes to This Policy</h3>
                    <p>If anything changes, this policy will be updated.
                    </p>
                </li>
                If you have any questions, you can contact imp0ster on <a href="https://x.com/the_imp0ster">X</a>
            </ol>
        </div>
    )
}

export default PrivacyPolicy;