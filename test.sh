code=qhr0NqJhXhyfTYgo
#curl -d "grant_type=authorization_code&code=${code}&client_id=abc123&client_secret=ssh-secret&redirect_uri=https%3A%2F%2Fxiaodu.baidu.com%2Fsaiya%2Fauth%2F760e719fedb4655e5917297f857e5791" "https://weixin.wangp.org/oauth/oauth/token"
curl "https://weixin.wangp.org/oauth/oauth/token?grant_type=authorization_code&code=${code}&client_id=abc123&client_secret=ssh-secret&redirect_uri=https%3A%2F%2Fxiaodu.baidu.com%2Fsaiya%2Fauth%2F760e719fedb4655e5917297f857e5791"
