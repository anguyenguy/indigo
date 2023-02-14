$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "http://studio.local.overhang.io:8001/fxprograms/api/programs",
    success: function (response) {
      var programs = response;
      let program_id = Object.keys(programs)[0];
      let program_name = programs[program_id].name;

      let metadata = programs[program_id].metadata;

      //Đếm số course của chương trình
      countItems(metadata);

      for (let course in metadata) {
        let courseData = metadata[course];

        const course_image_url = courseData.course_image_url || "";
        const course_name = courseData.display_name || "";
        const course_id = courseData.id || "";

        var card = `
                <div class="col-md-4">
                    <div class="card-deck">
                        <div class="card" >
                            <img src="http://viettelidc.com.vn//uploadimage/Root/root/1113.png" class="card-img-top" style="padding: 15px; border-radius: 20px" alt="Ảnh khóa học" />
                            <div class="card-body ">
                                <h5 class="card-title">${course_name}</h5>
                                
                                <div class="card-footer d-flex justify-content-between">
                                    <div class="d-flex flex-column text-left">
                                        <span>${program_id}</span>
                                        <span>${course_id.split(":")[1]}</span>
                                    </div>
                                    <a href="../courses/${course_id}" class="btn btn-link"><i class="fa fa-long-arrow-right" style="font-size: 20px; transform: scale(1.5)" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    `;
        $(".program_content").append(card);
      }
    },
  });
});

// Đếm số lượng item trong JSON
function countItems(data) {
  const programElement = document.getElementById("program_count");
  let programCount = Object.keys(data).length;
  return (programElement.innerHTML = programCount);
}
