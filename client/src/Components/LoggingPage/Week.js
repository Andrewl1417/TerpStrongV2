import React from 'react'

const title = {
    fontSize: "2em"
  }

const Week = () => {
  return (
    <div>
        <h1 style={title}>Logger</h1>
          <br/>
          <br/>

          {/* <div class="card-group row row-cols-2 justify-content-around"> */}
              <div class="card col mb-4">
                  <div class="card-body" >
                      <h5 class="card-title">Monday</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Push</h6>
                  </div>
              </div>
              <div class="card col mb-4">
                  <div class="card-body">
                      <h5 class="card-title">Tuesday</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Pull</h6>
                  </div>
              </div>
              <div class="card col mb-4">
                  <div class="card-body">
                      <h5 class="card-title">Wednesday</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Legs</h6>
                  </div>
              </div>
              <div class="card col mb-4">
                  <div class="card-body">
                      <h5 class="card-title">Thursday</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Arm</h6>
                  </div>
              </div>
              <div class="card col mb-4">
                  <div class="card-body">
                      <h5 class="card-title">Friday</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Log Workout</h6>
                  </div>
              </div>
              <div class="card col mb-4">
                  <div class="card-body">
                      <h5 class="card-title">Saturday</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Log Workout</h6>
                  </div>
              </div>
              <div class="card col mb-4">
                  <div class="card-body">
                      <h5 class="card-title">Sunday</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Log Workout</h6>
                  </div>
              </div>
            {/* </div> */}
    </div>
  )
}

export default Week