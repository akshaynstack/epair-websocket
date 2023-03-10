export enum MessageType {
  WELCOME = 'welcome',
  LOCAL_NETWORKS = 'localNetworks',
  NETWORK_NAME = 'networkName',
  CLIENT_NAME = 'clientName',
  TRANSFER = 'transfer',
  ACTION = 'action',
  NETWORK = 'network',
  PING = 'ping',
  RTC_DESCRIPTION = 'rtcDescription',
  RTC_CANDIDATE = 'rtcCandidate',
  ENCRYPTED = 'encrypted',
}

export enum ActionMessageActionType {
  ACCEPT = 'accept',
  REJECT = 'reject',
  CANCEL = 'cancel',
}
