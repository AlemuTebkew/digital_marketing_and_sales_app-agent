    <template>
 <div class="col-md-3 mx-auto border rounded-1 px-3 pt-3 mt-5">
    <h4 class="mt-2 text-center">Enter New Password</h4>

 <!-- forgot password form -->
    <form  class="pt-1" @submit.prevent="resetPassword">
           <div
        class="mb-4"
        :class="{ warining: v$.userCrediantail.password.$error }"
      >
        <label for="#password" class="form-label">Password</label>
        <div class="d-flex position-relative">
          <input
            class="form-control"
            v-model="userCrediantail.password"
            id="password"
            :type="isPasswordVisible ? 'text' : 'password'"
            aria-label=".form-control-lg"
            @blur="v$.userCrediantail.password.$touch"
          />
          <i
            @click="toggleShowPassword"
            class="position-absolute end-0 mx-2 mt-2 far"
            :class="isPasswordVisible ? 'fa-eye' : 'fa-eye-slash'"
          ></i>
        </div>

        <div class="d-flex position-relative my-4">
          <input
            class="form-control"
            v-model="userCrediantail.password"
            id="password"
            :type="isPasswordVisible ? 'text' : 'password'"
            aria-label=".form-control-lg"
            @blur="v$.userCrediantail.password.$touch"
          />
          <i
            @click="toggleShowPassword"
            class="position-absolute end-0 mx-2 mt-2 far"
            :class="isPasswordVisible ? 'fa-eye' : 'fa-eye-slash'"
          ></i>
        </div>

        <span
          class="error-msg mt-1"
          v-for="(error, index) of v$.userCrediantail.password.$errors"
          :key="index"
          >{{ error.$message + ", " }}</span
        >
      </div>

            <div class="d-grid gap-2">
        <button class="btn text-white" type="submit">
          <span v-if="isLoading">
            <span
              class="spinner-border spinner-border-sm mx-2"
              role="status"
              aria-hidden="true"
            ></span>
            <span>Signing</span>
          </span>
          <span v-else>Sign in</span>
        </button>
        <p class="text-danger text-center small">{{ notify }}</p>
      </div>
    </form>
 </div>
 
</template>
<script>
 import { required, helpers, email } from "@vuelidate/validators";
import useValidate from "@vuelidate/core";
import apiClient from "../resources/baseUrl";
export default {
  data() {
    return {
      isForgotSelected: false,
      v$: useValidate(),
      userCrediantail: {
        email: "",
        password: "",
      },
      emailForForgot: "",
      forgotSuccessMessage: "",
      isPasswordVisible: false,
      isLoading: false,
      notify: "",
    };
  },

  validations() {
    return {
      userCrediantail: {
        email: {
          email,
          required: helpers.withMessage("Email can't be empty", required),
        },
        password: {
          required: helpers.withMessage("Password can't be empty", required),
        },
      },
      emailForForgot: {
        email,
        required,
      },
    };
  },

   async resetPassword() {
      this.notify = "";
      this.forgotSuccessMessage = "";
      this.v$.emailForForgot.$validate();
      if (!this.v$.emailForForgot.$error) {
        this.isLoading = true;
        try {
          const response = await apiClient.post("/api/forgot", {
            email: this.emailForForgot,
          });
          if (response.status == 200) {
            this.forgotSuccessMessage =
              "We have sent verfication link. Check your inbox please!";
          }
        } catch (e) {
          this.notify = "Failed";
        } finally {
          this.isLoading = false;
        }
      }
    },

  }
</script>
<style scoped>
.btn {
  background-color: #ff7e00;
}
</style>
