<!DOCTYPE html>
<html>
    
    <script type="text/javascript">
        function confirmEmail()
        {
            var email = document.getElementById("email").value;
            var strudel = email.indexOf("@");
            var dot = email.indexOf(".");
            var submitEmail = true;

            if (strudel < 2 || dot < 4)
            {
                submitEmail = false;
                alert("Please submit a valid email.");
            }

            if(submitEmail == false)
            {
                document.getElementById("form").reset();
            }

            if(submitEmail == true)
            {
                createIFrame();
            }
        }

        function createIFrame()
        {
            // preview window
            var preview_window = document.createElement("div");
            preview_window.setAttribute("id", "preview_window");

            // panel to hold preview and email frame
            var email_panel = document.createElement("div");
            email_panel.setAttribute("id", "email_panel");

            //iframe to hold email template
            var preview = document.createElement("iframe");
            preview.setAttribute("id", "preview");
            preview.setAttribute("src", "emailHandler.php?template=" + document.getElementById("phish_selection").value); // bringing in the appropriate template

            var email_header = document.createElement("div");
            email_header.setAttribute("id", "email_header");

            var mail_icon = document.createElement("img");
            mail_icon.setAttribute("id", "mail_image");
            mail_icon.setAttribute("src", "images/email_icon.png");
            mail_icon.setAttribute("alt", "email icon");

            var recipient_box = document.createElement("label");
            recipient_box.setAttribute("id", "recipient");
            recipient_box.innerHTML = "to: " + document.getElementById("email").value;

            var button_container = document.createElement("div");
            button_container.setAttribute("id", "button_container");

            var cancel_button = document.createElement("button");
            cancel_button.setAttribute("id", "cancel_button");
            cancel_button.innerHTML = "cancel";
            cancel_button.addEventListener("click", function(e){ 
                document.body.removeChild(document.getElementById("preview_window"));
                document.getElementById("form").reset();
             });
            cancel_button.style.cursor = "pointer";

            var send_button = document.createElement("button");
            send_button.setAttribute("id", "send_button");
            send_button.innerHTML = "send";
            send_button.addEventListener("click", function(e){
                var post_request = new XMLHttpRequest();
                post_request.onreadystatechange = function()
                {
                    if (post_request.readyState === 4)
                    {
                        alert("Email sent!");
                        window.location = "home.html";
                    }
                };
                post_request.open("POST", "emailHandler.php", true);
                post_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                post_request.send("email=" + document.getElementById("email").value + "&template=" + document.getElementById("phish_selection").value);
            });
            send_button.style.cursor = "pointer";

            email_header.appendChild(mail_icon);
            email_header.appendChild(recipient_box);
            email_panel.appendChild(email_header);
            email_panel.appendChild(preview);
            button_container.appendChild(cancel_button);
            button_container.appendChild(send_button);
            preview_window.appendChild(email_panel);
            preview_window.appendChild(button_container);

            document.body.appendChild(preview_window);
        }
    </script>
    
    <head>
        <title>Send a Phish!</title>
        <meta charset="UTF-8">

        <link rel="icon" href="images/octo.ico">

        <link rel="stylesheet" href="selection_style.css">
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap" rel="stylesheet">
    </head>

    <body>
        <header>
            <h1>Send a Phishing Email</h1>
        </header>
            
        <main>    
            <nav>
                <ul>
                    <li>
                        <a href="home.html">Home</a>
                    </li>

                    <li>
                        <a href="legal.html">Legal Disclaimer</a>
                    </li>

                    <li>
                        <a href="about.html">About</a>
                    </li>
                </ul>
            </nav>
            
            <div class="boxBorder boxContainer">
                <form id="form">
                    <label for="email">Send to:</label> </br>
                    <input type="email" id="email" placeholder="Recipient email address" class="input">
                </br>
                </br>   

                    <label for="phish_selection">Choose your phish:</label> 
                    </br>
                    <select id="phish_selection" class="input">
                    <?php
                        $templates = [];
                        foreach(scandir("Emails") as $fileName)
                            if(($fileName != ".") && ($fileName != "..") && (strstr($fileName, ".html") != false))
                                array_push($templates, explode(".html", $fileName)[0]);

                        foreach($templates as $template)
                            echo "<option value=\"" . $template . "\">" . $template . "</option>";
                    ?>
                    </select>
                </br>
            </br>

                    <div>
                        <input type="button" value="Preview Email" class="button" onclick="confirmEmail()">
                    </div>



                </form>
            </div>

       

        </main>

        <footer>
            This is not to be used aside from educational purposes.
        </footer>
    </body>
</html>