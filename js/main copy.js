var counter = 1;

function add_phone() {
    counter += 1;
  let form = document.forms[0];
  form.innerHTML += `<div class="d-flex justify-content-around ">
    <div class="form-group my-3 d-flex align-items-center">
        <label for="phone-number" class="form-label w-75">Phone number: </label>
        <input type="text" class="form-control" id="phone-number" name="phone-number" placeholder="Enter phone number">
    </div>
    <div class="form-group my-3 d-flex align-items-center justify-content-between">
        <label for="phone-type" class="form-label text-nowrap me-3">Phone type:</label>
        <select class="form-select" id="phone-type" name="phone-type">
            <option value="1">Home</option>
            <option value="2">Work</option>
            <option value="3" selected>Mobile</option>
        </select>
    </div>
    <div class="form-group my-3 d-flex align-items-center">
        <label for="phone-priority" class="form-label">Priority</label>
        <input type="radio" class="form-radio ms-4" id="phone-priority" name="phone-priority" value="${counter}" checked>
    </div>
</div>`;
}
