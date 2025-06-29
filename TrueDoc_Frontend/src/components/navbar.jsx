import { Button, Drawer, Menu } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  // Color theme
  const colors = {
    primary: "#425e6e",
    secondary: "#dde8ed",
    tertiary: "#f2f6f7",
  };

  const showMobileMenu = () => {
    setMobileMenuVisible(true);
  };

  const hideMobileMenu = () => {
    setMobileMenuVisible(false);
  };

  const navItems = [
    { key: 'how-it-works', label: 'How It Works', href: '#how-it-works' },
    { key: 'features', label: 'Features', href: '#features' },
    { key: 'faq', label: 'FAQs', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div
            onClick={() => navigate('/')}
            className="flex items-center cursor-pointer"
          >
            <span className="text-2xl font-extrabold" style={{ color: colors.primary }}>TrueDoc</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    className="font-medium transition-colors duration-300 hover:opacity-80"
                    style={{ color: colors.primary }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center space-x-4">
              <Button
                type="primary"
                className="font-medium border-0 shadow-sm transition-all duration-300 hover:opacity-90"
                style={{
                  backgroundColor: colors.primary,
                }}
                onClick={() => navigate('/upload')}
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            style={{ color: colors.primary }}
            onClick={showMobileMenu}
          >
            <MenuOutlined className="text-xl" />
          </button>

          {/* Mobile Drawer Menu */}
          <Drawer
            title={
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold" style={{ color: colors.primary }}>TrueDoc</span>
                <button onClick={hideMobileMenu}>
                  <CloseOutlined style={{ color: colors.primary }} />
                </button>
              </div>
            }
            placement="right"
            closable={false}
            onClose={hideMobileMenu}
            open={mobileMenuVisible}
            width="75%"
            bodyStyle={{ padding: 0, backgroundColor: colors.tertiary }}
            headerStyle={{
              borderBottom: 'none',
              padding: '20px 24px',
              backgroundColor: colors.secondary
            }}
          >
            <Menu
              mode="inline"
              style={{ borderRight: 0, backgroundColor: colors.tertiary }}
              className="mobile-menu"
            >
              {navItems.map((item) => (
                <Menu.Item
                  key={item.key}
                  onClick={hideMobileMenu}
                  style={{ color: colors.primary }}
                >
                  <a href={item.href} style={{ color: colors.primary }}>
                    {item.label}
                  </a>
                </Menu.Item>
              ))}
              <Menu.Divider />
              <Menu.Item key="signin">
                <Button
                  type="text"
                  block
                  className="text-left"
                  style={{ color: colors.primary }}
                  onClick={() => {
                    hideMobileMenu();
                    navigate('/signin');
                  }}
                >
                  Sign in
                </Button>
              </Menu.Item>
              <Menu.Item key="get-started">
                <Button
                  type="primary"
                  block
                  className="border-0"
                  style={{ backgroundColor: colors.primary }}
                  onClick={() => {
                    hideMobileMenu();
                    navigate('/upload');
                  }}
                >
                  Get Started
                </Button>
              </Menu.Item>
            </Menu>
          </Drawer>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;