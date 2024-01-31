const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport(
    {
        host: 'smtp.mail.ru',
        port: 465,
        secure: true,
        auth: {
            user: 'malik.hubiev@mail.ru',
            pass: 'dJjfycJFZkSxsfPJd6NE'
        }
    }
);

const codeMaking = () => {
    const code = Math.floor(Math.random() * Date.now());
    const simplifiedCode = `${code}`.slice(0, 5);
    return simplifiedCode;
};

const emailTemplate = (secretCode) => {
    const htmlCode = `<li>${secretCode[0]}</li><li>${secretCode[1]}</li><li>${secretCode[2]}</li><li>${secretCode[3]}</li><li>${secretCode[4]}</li>`;
    return `
    <!DOCTYPE html><html lang="en"><head> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Email</title></head><body> <h1>hello.<span class="hello"></span>To confirm your email, enter the following code in the input field on the site:</h1> <ul>${htmlCode}</ul></body><style>*{margin: 0; padding: 0; box-sizing: border-box; font-family: Century Gothic, sans-serif; background-color: #000;}body{width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center; flex-direction: column;}h1{position: relative; width: 780px; font-size: 50px; color: #fff;}.hello{position: absolute; width: 150px; height: 40px; background-color: #6aff72; opacity: 0.3; top: 0; left: 0; transform: translateX(-10px) translateY(10px) rotate(-15deg);}ul{margin: 0; padding: 0; margin-top: 20px; width: 780px; display: flex; justify-content: flex-start; align-items: center;}li{width: 70px; height: 70px; margin-right: 10px; border-radius: 35%; background-color: #6aff72; display: flex; justify-content: center; align-items: center; font-size: 30px; color: #000;}</style></html>
    `;
};

module.exports = async (email) => {
    const secretCode = codeMaking();
    const info = await transporter.sendMail({
        from: "Juli <malik.hubiev@mail.ru>",
        to: email,
        subject: "Hey",
        text: "Sup",
        html: emailTemplate(secretCode)
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    return secretCode;
};