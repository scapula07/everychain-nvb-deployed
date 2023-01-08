import { StreamrClient } from 'streamr-client'


export const streamrClient = new StreamrClient({
    auth: {
        ethereum: window.ethereum,
    }
})

// export const streamrClient  = new StreamrClient()