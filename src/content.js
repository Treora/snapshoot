import freezeDry from 'freeze-dry'
import { makeRemotelyCallable } from './webextensionRPC'

makeRemotelyCallable({
    freezeDry,
})
