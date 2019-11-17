<template>
    <div class="container text-left">
        <div class="row">
            <div class="col-6">
                <div class="container">
                    <code>
                        {{token}}
                    </code>
                </div>
            </div>
            <div class="col-6 ">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h5>HEADER:ALGORITHM & TOKEN TYPE</h5>
                            <code>
                                {{jwth}}
                            </code>
                        </div>
                        <div class="col-12">
                            <h5>PAYLOAD:DATA</h5>
                            <code>
                                {{jwtp}}
                            </code>
                        </div>
                    </div>
                    <code>
                        
                    </code>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'JGTest',
  data () {
    return {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    }
  },
  computed: {
    jwth () {
      return JSON.parse(atob(this.token.split('.')[0]))
    },
    jwtp () {
      return JSON.parse(atob(this.token.split('.')[1]))
    }
  }
}
</script>
