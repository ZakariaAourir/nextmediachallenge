<template id="">
  <div class="">
    <b-container>
      <b-row align-h='center'>
        <b-col cols='5'>
          <b-card class="card">
            <b-form @submit="" @reset="">
              <b-form-group
                label = 'Username:'
              >
                <b-form-input
                  class="form-control"
                  type="text"
                  name="username"
                  placeholder="Enter Your Username">
                </b-form-input>
              </b-form-group>
              <b-form-group
                label = 'Email:'
              >
                <b-form-input
                  class="form-control"
                  type="email"
                  name="email"
                  placeholder="Enter Your Email">
                </b-form-input>
              </b-form-group>
              <b-form-group
                label = 'Password:'
              >
                <b-form-input
                  class="form-control"
                  type="password"
                  name="password"
                  placeholder="Enter Your password">
                </b-form-input>
              </b-form-group>
              <b-form-group
                label = 'Confirm password:'
              >
                <b-form-input
                  class="form-control"
                  type="password"
                  name="password2"
                  placeholder="Confirm Your password">
                </b-form-input>
              </b-form-group>
              <b-button class="btn btn-success" style="font-size: 10px;" type="submit" name="button">Register</b-button>
              <br>
              <br>
              You Already Have An Account? <b-link class="btn btn-dark btn-sm" href="/login">Login</b-link>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
