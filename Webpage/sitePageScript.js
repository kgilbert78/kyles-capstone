let images = document.getElementById("thumbnailRow").getElementsByTagName("img");
                for (let i=0; i < images.length; i++) {
                    images[i].onmouseover = function () {
                        this.style.cursor = 'hand';
                        this.style.borderColor = "orange";
                    }
                    images[i].onmouseout = function () {
                        this.style.cursor = 'pointer';
                        this.style.borderColor = "lightgray";
                    }
                }
                function changeImage(event)
                {
                    event = event || window.event;
        
                    let targetElement = event.target || event.srcElement;
        
                    if (targetElement.tagName == "IMG") {
                        document.getElementById("featureImage").src = targetElement.getAttribute("src");
                    }
                }