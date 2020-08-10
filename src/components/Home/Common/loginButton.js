import React from 'react';

function LoginButton() {
  return (
    <button>
      <img
        src="https://platform.slack-edge.com/img/sign_in_with_slack.png"
        alt="슬랙으로 로그인"
        srcset="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x"
      />
    </button>
  );
}

export default LoginButton;
