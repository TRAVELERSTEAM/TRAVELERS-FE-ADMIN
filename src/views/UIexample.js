import React from 'react'

const Colors = React.lazy(() => import('../views/theme/colors/Colors'))
const Typography = React.lazy(() => import('../views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('../views/base/accordion/Accordion'))
const Cards = React.lazy(() => import('../views/base/cards/Cards'))
const Carousels = React.lazy(() => import('../views/base/carousels/Carousels'))
const ListGroups = React.lazy(() => import('../views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('../views/base/navs/Navs'))
const Paginations = React.lazy(() => import('../views/base/paginations/Paginations'))
const Progress = React.lazy(() => import('../views/base/progress/Progress'))
const Spinners = React.lazy(() => import('../views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('../views/base/tables/Tables'))

// Buttons
const Buttons = React.lazy(() => import('../views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('../views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('../views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('../views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('../views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('../views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('../views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('../views/forms/layout/Layout'))
const Range = React.lazy(() => import('../views/forms/range/Range'))
const Select = React.lazy(() => import('../views/forms/select/Select'))
const Validation = React.lazy(() => import('../views/forms/validation/Validation'))
const Charts = React.lazy(() => import('./Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./CoreUIIcons'))

// Notifications
const Alerts = React.lazy(() => import('../views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('../views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('../views/notifications/modals/Modals'))
const Widgets = React.lazy(() => import('../views/widgets/Widgets'))

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
