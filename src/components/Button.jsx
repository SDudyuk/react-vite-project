// Базові стилі для кнопки
export default function Button({ 
  variant = "primary", 
  size = "medium", 
  disabled = false,  
  onClick, 
  fullWidth = false,
  children,
}) {

  const baseStyles = {
    border: "none",
    borderRadius: "6px",
    cursor: disabled ? "not-allowed" : "pointer",
    fontWeight: "500",
    transition: "all 0.3s ease",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    opacity: disabled ? 0.6 : 1,
    width: fullWidth ? "100%" : "auto",
  };

  // Стилі для різних варіантів
  const variantStyles = {
    primary: {
      backgroundColor: "#007bff",
      color: "#ffffff",
      border: "2px solid #007bff",
    },
    secondary: {
      backgroundColor: "#6c757d",
      color: "#ffffff",
      border: "2px solid #6c757d",
    },
    success: {
      backgroundColor: "#28a745",
      color: "#ffffff",
      border: "2px solid #28a745",
    },
    danger: {
      backgroundColor: "#dc3545",
      color: "#ffffff",
      border: "2px solid #dc3545",
    },
    outline: {
      backgroundColor: "transparent",
      color: "#007bff",
      border: "2px solid #007bff",
    },
  };

  // Стилі для різних розмірів
  const sizeStyles = {
    small: {
      padding: "6px 12px",
      fontSize: "14px",
    },
    medium: {
      padding: "10px 20px",
      fontSize: "16px",
    },
    large: {
      padding: "14px 28px",
      fontSize: "18px",
    },
  };

  const buttonStyles = {
    ...baseStyles,
    ...variantStyles[variant],
    ...sizeStyles[size],
  };

  // Hover ефект (додатковий)
  const handleMouseEnter = (e) => {
    if (!disabled && variant !== "outline") {
      e.target.style.opacity = "0.9";
      e.target.style.transform = "translateY(-2px)";
    }
    if (!disabled && variant === "outline") {
      e.target.style.backgroundColor = "#007bff";
      e.target.style.color = "#ffffff";
    }
  };

  const handleMouseLeave = (e) => {
    if (!disabled) {
      e.target.style.opacity = "1";
      e.target.style.transform = "translateY(0)";
    }
    if (!disabled && variant === "outline") {
      e.target.style.backgroundColor = "transparent";
      e.target.style.color = "#007bff";
    }
  };

  return (
    <button 
      style={buttonStyles} 
      onClick={disabled ? undefined : onClick} 
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
}
