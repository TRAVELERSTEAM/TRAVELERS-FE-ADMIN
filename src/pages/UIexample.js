import React from 'react'

const Colors = React.lazy(() => import('../components/CoreUi/examples/Colors'))
const Typography = React.lazy(() => import('../components/CoreUi/examples/Typography'))

// Base
const Accordion = React.lazy(() => import('../components/CoreUi/examples/base/Accordion'))
const Cards = React.lazy(() => import('../components/CoreUi/examples/base/Cards'))
const Carousels = React.lazy(() => import('../components/CoreUi/examples/base/Carousels'))
const ListGroups = React.lazy(() => import('../components/CoreUi/examples/base/ListGroups'))
const Navs = React.lazy(() => import('../components/CoreUi/examples/base/Navs'))
const Paginations = React.lazy(() => import('../components/CoreUi/examples/base/Paginations'))
const Progress = React.lazy(() => import('../components/CoreUi/examples/base/Progress'))
const Spinners = React.lazy(() => import('../components/CoreUi/examples/base/Spinners'))
const Tables = React.lazy(() => import('../components/CoreUi/examples/base/Tables'))

// Buttons
const Buttons = React.lazy(() => import('../components/CoreUi/examples/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('../components/CoreUi/examples/buttons/ButtonGroups'))
const Dropdowns = React.lazy(() => import('../components/CoreUi/examples/buttons/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('../components/CoreUi/examples/forms/ChecksRadios'))
const FloatingLabels = React.lazy(() =>
  import('../components/CoreUi/examples/forms/FloatingLabels'),
)
const FormControl = React.lazy(() => import('../components/CoreUi/examples/forms/FormControl'))
const InputGroup = React.lazy(() => import('../components/CoreUi/examples/forms/InputGroup'))
const Layout = React.lazy(() => import('../components/CoreUi/examples/forms/Layout'))
const Range = React.lazy(() => import('../components/CoreUi/examples/forms/Range'))
const Select = React.lazy(() => import('../components/CoreUi/examples/forms/Select'))
const Validation = React.lazy(() => import('../components/CoreUi/examples/forms/Validation'))
const Charts = React.lazy(() => import('../components/CoreUi/examples/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('../components/CoreUi/examples/CoreUIIcons'))

// Notifications
const Alerts = React.lazy(() => import('../components/CoreUi/examples/notifications/Alerts'))
const Badges = React.lazy(() => import('../components/CoreUi/examples/notifications/Badges'))
const Modals = React.lazy(() => import('../components/CoreUi/examples/notifications/Modals'))
const Widgets = React.lazy(() => import('../components/CoreUi/examples/widgets/Widgets'))

function UIexample() {
  return (
    <>
      <div>
        <h1>============Colors</h1>
        <Colors />
      </div>
      <div>
        <h1>============Typography</h1>
        <Typography />
      </div>
      <div>
        {' '}
        <h1>============Base</h1>
        <Accordion />
        <Cards />
        <Carousels />
        <ListGroups />
        <Navs />
        <Paginations />
        <Progress />
        <Spinners />
        <Tables />
      </div>
      <div>
        {' '}
        <h1>============Buttons</h1>
        <Buttons />
        <ButtonGroups />
        <Dropdowns />
      </div>

      <div>
        {' '}
        <h1>============Forms</h1>
        <ChecksRadios />
        <FloatingLabels />
        <FormControl />
        <InputGroup />
        <Layout />
        <Range />
        <Select />
        <Validation />
        <Charts />
      </div>
      <div>
        {' '}
        <h1>============Icons</h1>
        <CoreUIIcons />
      </div>
      <div>
        {' '}
        <h1>============Notifications</h1>
        <Alerts />
        <Badges />
        <Modals />
        <Widgets />
      </div>
    </>
  )
}

export default UIexample
