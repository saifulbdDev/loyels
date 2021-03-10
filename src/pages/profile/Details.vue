<template>
  <div class="user-details">
    <div class="user-account">
      <div class="account-header">
        <h4 class="pb-2">My account</h4>
      </div>

      <form action="" class="pt-3 pb-4">
        <div class="form-header">
          <div class="header-des">
            <p>Personal information</p>
            <button type="submit"><span>Cancel</span></button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-12">
            <div class="input-group">
              <label for="userName"
                >Userna: <strong class="text-danger">*</strong></label
              >
              <input
                type="text"
                id="userName"
                class="form-control"
                placeholder="User01"
              />
            </div>
          </div>
          <div class="col-md-6 col-12">
            <div class="input-group">
              <label for="userMail"
                >User Email: <strong class="text-danger">*</strong></label
              >
              <input
                type="text"
                id="userMail"
                class="form-control"
                placeholder="User01@loyel.com"
              />
            </div>
          </div>
        </div>
        <div class="form-btn mt-4">
          <button type="submit" class="btn btn-info">Save</button>
        </div>
      </form>

      <form action="" class="pt-3 pb-4">
        <div class="form-header">
          <div class="header-des">
            <p>Mobile phone</p>
            <button type="submit"><span>Edit</span></button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-12">
            <div class="input-group">
              <label for="mobileNo"
                >Mobile No: <strong class="text-danger">*</strong></label
              >
              <input
                type="number"
                id="mobileNo"
                class="form-control"
                placeholder="656856543"
              />
            </div>
          </div>
          <div class="col-md-6 col-12">
            <div class="input-group">
              <label for="phoneNo"
                >Phoen No: <strong class="text-danger">*</strong></label
              >
              <input
                type="number"
                id="phoneNo"
                class="form-control"
                placeholder="+4875431920"
              />
            </div>
          </div>
        </div>
      </form>

      <form action="" class="pt-3 pb-4">
        <div class="form-header">
          <div class="header-des">
            <p>Geographic location</p>
            <button type="submit"><span>Edit</span></button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 col-12">
            <div class="input-group">
              <label for="exampleFormControlSelect1"
                >Country: <strong class="text-danger">*</strong></label
              >
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Bangladesh</option>
                <option>India</option>
                <option>Pkistan</option>
                <option>Turkey</option>
                <option>USA</option>
              </select>
            </div>
          </div>
          <div class="col-md-3 offset-md-1 col-12">
            <div class="input-group">
              <label for="exampleFormControlSelect1"
                >State: <strong class="text-danger">*</strong></label
              >
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Dhaka</option>
                <option>Kelkata</option>
                <option>Lahor</option>
                <option>Istambul</option>
                <option>Cikago</option>
              </select>
            </div>
          </div>
          <div class="col-md-3 offset-md-1 col-12">
            <div class="input-group">
              <label for="exampleFormControlSelect1"
                >City: <strong class="text-danger">*</strong></label
              >
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Dhaka</option>
                <option>Dillih</option>
                <option>Istamabad</option>
                <option>Ankara</option>
                <option>New yeork</option>
              </select>
            </div>
          </div>
        </div>
      </form>

      <form action="" class="pt-3 pb-4">
        <div class="form-header">
          <div class="header-des">
            <p>User Image</p>
            <button type="submit"><span>Edit</span></button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-12">
            <div class="input-group">
              <label for="chooseFile"
                >Image: <strong class="text-danger">*</strong></label
              >
              <input
                type="file"
                id="chooseFile"
                class="form-control"
                placeholder="No file chosen"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="faq-content">
      <div class="faq-header">
        <h4>Frequent questions</h4>
      </div>
      <div class="faq-item">
        <div class="item-title">
          <h6>Hello world?</h6>
        </div>
        <div class="item-text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            minima iure commodi quas. Blanditiis quod assumenda consequatur
            exercitationem iste voluptas inventore natus expedita veniam
            consequuntur magnam sint ab repudiandae esse tempora, facilis ut
            doloribus dicta deserunt, nesciunt reiciendis? Omnis, eum.
          </p>
        </div>
      </div>
      <div class="faq-item">
        <div class="item-title">
          <h6>Hello world?</h6>
        </div>
        <div class="item-text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            minima iure commodi quas. Blanditiis quod assumenda consequatur
            exercitationem iste voluptas inventore natus expedita veniam
            consequuntur magnam sint ab repudiandae esse tempora, facilis ut
            doloribus dicta deserunt, nesciunt reiciendis? Omnis, eum.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
