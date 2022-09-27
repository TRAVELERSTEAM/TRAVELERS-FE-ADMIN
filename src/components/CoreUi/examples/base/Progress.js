import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CProgress, CProgressBar, CRow } from '@coreui/react'
import { DocsExample } from 'src/components/CoreUi'

const Progress = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Progress</strong> <small>Animated stripes</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              The striped gradient can also be animated. Add <code>animated</code> property to{' '}
              <code>&lt;CProgressBar&gt;</code> to animate the stripes right to left via CSS3
              animations.
            </p>
            <DocsExample href="components/progress#animated-stripes">
              <CProgress className="mb-3">
                <CProgressBar color="success" variant="striped" animated value={25} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar color="info" variant="striped" animated value={50} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar color="warning" variant="striped" animated value={75} />
              </CProgress>
              <CProgress className="mb-3">
                <CProgressBar color="danger" variant="striped" animated value={100} />
              </CProgress>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Progress
