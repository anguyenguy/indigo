
$(document).ready(function () {
  $.ajaxSetup({
    beforeSend: function(request) {
       request.setRequestHeader("fx-programs-headers", 'fx-programs-value');
    },
 });
  $.ajax({
    type: "GET",
    url: `https://studio.lilac.funix.edu.vn/fxprograms/api/programs`,
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
                          <div class="position-relative">
                            <div class="position-absolute top-0 start-0 p-2 ${courseData.language === 'en' ? 'bg-primary text-white' : 'bg-danger text-white'}" style="top: 15px;">
                              <span>${courseData.language === 'en' ? 'Tiếng Anh' : 'Tiếng Việt'}</span>
                            </div>
                            <img src="${course_image_url}" class="card-img-top w-100 img-fluid" style="padding: 15px; border-radius: 20px" alt="Ảnh khóa học" />

                          </div>
                            <div class="card-body ">
                                <h5 class="card-title">${course_name}</h5>
                                
                                <div class="d-flex justify-content-between">
                                    <div class="d-flex flex-column text-left">
                                        <span>${program_id}</span>
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
