import DefaultLayout from 'components/layouts/DefaultLayout'
import SettingsLayout from 'components/layouts/ProjectSettingsLayout/SettingsLayout'
import type { NextPageWithLayout } from 'types'

const Settings: NextPageWithLayout = () => {
  return <>{/* <h1>Use this as a page template for settings pages</h1> */}</>
}

Settings.getLayout = (page) => (
  <DefaultLayout>
    <SettingsLayout>{page}</SettingsLayout>
  </DefaultLayout>
)

export default Settings
