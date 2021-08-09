import Mailchimp from "react-mailchimp-form"

export default function SignUpForm() {
    return(
        <div>
            <Mailchimp
                action="https://treesasinfrastructure.us5.list-manage.com/subscribe/post?u=79b921b3858895873082cb61b&amp;id=5861f9779c"
                className=""
                fields={[
                    {
                        name: "EMAIL",
                        placeholder: "email",
                        type: "email",
                        required: true
                    }
                ]}
                messages = {
                    {
                      sending: "Sending...",
                      success: "Thank you for subscribing!",
                      error: "An unexpected internal error has occurred.",
                      empty: "You must write an e-mail.",
                      duplicate: "Too many subscribe attempts for this email address",
                      button: "Subscribe!"
                    }
                  }
            />
        </div>
    )
}

