import React from 'react';

function LoginButton() {
  return (
    <a href="https://slack.com/oauth/authorize?user_scope=incoming-webhook&client_id=1279458981345.1293918756150">
      <img
        src="https://platform.slack-edge.com/img/sign_in_with_slack.png"
        alt="슬랙으로 로그인"
        // srcset="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x"
      />
    </a>
  );
}

export default LoginButton;
