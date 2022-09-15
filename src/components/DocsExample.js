import PropTypes from 'prop-types'
import React from 'react'
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from '@coreui/react'

const DocsExample = (props) => {
  const { children, href } = props

  const _href = `https://coreui.io/react/docs/${href}`

  return (
    <div className="example">
      <CNav variant="tabs">
        <CNavItem>
          <CNavLink href="#" active>
            적용 예시
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href={_href} target="_blank">
            공식 문서 보기 👀
          </CNavLink>
        </CNavItem>
      </CNav>
      <CTabContent className="rounded-bottom">
        <CTabPane className="p-3 preview" visible>
          {children}
        </CTabPane>
      </CTabContent>
    </div>
  )
}

DocsExample.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
}

export default React.memo(DocsExample)
