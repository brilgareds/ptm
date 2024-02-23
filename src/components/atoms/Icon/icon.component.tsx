import IconStyles from './icon.module.css'

type IconProps = {
  style?: { [key: string]: string }
}

export const AddIcon = (props: IconProps) => (
  <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AddIcon" className={`${IconStyles.icon} ${IconStyles['icon--mui']}`} style={props.style}>
    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"></path>
  </svg>
)

export const EditIcon = (props: IconProps) => (
  <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditIcon" className={`${IconStyles.icon} ${IconStyles['icon--mui']}`} style={props.style}>
    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"></path>
  </svg>
)

export const DeleteIcon = (props: IconProps) => (
  <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteOutlineIcon" className={`${IconStyles.icon} ${IconStyles['icon--mui']}`} style={props.style}>
    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z"></path>
  </svg>
)

export const SaveIcon = (props: IconProps) => (
  <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SaveIcon" className={`${IconStyles.icon} ${IconStyles['icon--mui']}`} style={props.style}>
    <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path>
  </svg>
)