import { app, profileAPI } from './api'

import { getStorage, ref, getDownloadURL, uploadBytes } from 'firebase/storage'
import { setUrl } from '../redux/auth/slice'
import { split } from 'lodash'

const storage = getStorage(app)
