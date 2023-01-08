import {atom} from "recoil"

export const videoListState = atom({
    key: 'videoState',
    default: [],
  });

export const AccountState =atom({
   key:"account",
   default:""
})

export const EnsNameState =atom({
  key:"ensname",
  default:""
})

export const AvaterState =atom({
  key:"ensAvater",
  default:""
})

export const TutorsState =atom({
  key:"Tutors",
  default:[]
})

export const xmtpClientState =atom({
    key:"signer",
    default:{}
  })