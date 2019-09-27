export const onServiceWorkerUpdateReady = () => {
  let confirmMessage =
    "新しいバージョンがあります。\n最新版にアップデートしますか？";
  if (window.location.pathname.includes("/en/")) {
    confirmMessage =
      "This application has been updated.\nReload to display the latest version?";
  } else if (window.location.pathname.includes("/zh/")) {
    confirmMessage = "检测到了新版本。\n是否更新到新版本？";
  }

  const answer = window.confirm(confirmMessage);
  if (answer === true) {
    window.location.reload();
  }
};
