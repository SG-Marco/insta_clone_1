let modalActiveBtn = document.querySelector('.my-modal-active-btn');
let modalBg = document.querySelector('.my-modal-bg');

modalActiveBtn.addEventListener('click', function () {
    modalBg.classList.add('bg-active');
});


//
// const modal = document.getElementById("my-modal-bg");
// const btnModal = document.getElementById("btn-my-modal-active-btn");
// btnModal.addEventListener("click", e => {
//     modal.style.display = "flex"
// });

//
// var myModal = document.getElementById('my-modal-bg');
// var myInput = document.getElementById('btn-my-modal-active-btn');
//
// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus();
// })
//







        $(document).ready(function(){
            show_reply();
        });


        function reply_1() {

            let reply_1 = $("#reply_1").val();


            $.ajax({
                type: "POST",
                url: "/reply",
                data: {reply_give: reply_1, reply_num: 1},
                success: function (response) {
                    alert(response["msg"]);
                    window.location.reload();
                }
            })
        }

        function show_reply() {

            $.ajax({
                type: "GET",
                url: "/reply",
                data: {},
                success: function(response) {
                    let replies = response["all_replies"]
                    for (let i=0; i < replies.length; i++) {
                        let ID = replies[i]["ID"];
                        let reply = replies[i]["reply"];

                        let temp_html = `<div>
                                        <span class="id_id">
                                            ${ID}
                                        </span>
                                        <span>
                                            ${reply}
                                        </span>
                                            </div>`;
                        if (replies[i]["reply_num"] == 1) {
                        $("#reply-list_1").append(temp_html)
                        } else if (replies[i]["reply_num"] == 2) {
                        $("#reply-list_2").append(temp_html)
                        } else if (replies[i]["reply_num"] == 3) {
                        $("#reply-list_3").append(temp_html)
                        }


                    }
                }
            })
        }
