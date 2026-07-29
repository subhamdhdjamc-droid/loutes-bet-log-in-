// Demo OTP
let generatedOTP = "123456";

// Send OTP
window.recaptchaVerifier = new RecaptchaVerifier(
    auth,
    "recaptcha-container",
    {
        size: "invisible"
    }
);

function sendOTP() {

    let mobile = document.getElementById("mobile").value.trim();

    if (!/^[6-9][0-9]{9}$/.test(mobile)) {
        alert("Enter Valid Mobile Number");
        return;
    }

    let phoneNumber = "+91" + mobile;

    signInWithPhoneNumber(
        auth,
        phoneNumber,
        window.recaptchaVerifier
    )

    .then((result) => {

        window.confirmationResult = result;

        document.getElementById("mobilePage").style.display = "none";
        document.getElementById("otpPage").style.display = "block";

        alert("OTP Sent Successfully");

    })

    .catch((error) => {

        alert(error.message);

    });

}

// Verify OTP
function verifyOTP() {

    let otp = document.getElementById("otp").value;

    confirmationResult.confirm(otp)

    .then(() => {

        document.getElementById("otpPage").style.display = "none";
        document.getElementById("passwordPage").style.display = "block";

    })

    .catch(() => {

        alert("Invalid OTP");

    });

}

// Finish Register
function finishRegister() {

    let password = document.getElementById("password").value.trim();

    if (password.length < 8) {

        alert("Password must be minimum 8 characters.");

        return;

    }

    alert("Account Created Successfully");

    // Home Page
    // window.location.href="home.html";

}

// Password Show Hide
function togglePassword(){

    let pass=document.getElementById("password");

    if(pass.type==="password"){

        pass.type="text";

    }else{

        pass.type="password";

    }

}