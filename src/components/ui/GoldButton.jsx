export default function GoldButton({ as: Component = 'a', className = '', ...props }) {
  return <Component className={`primary-btn ${className}`.trim()} {...props} />
}