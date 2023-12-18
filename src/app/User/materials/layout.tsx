"use client"
import React, { PropsWithChildren } from 'react'
import MaterialPageProvider from '@/app/contexts/MaterialPageProvider';

const Layout = ({ children }: PropsWithChildren) => {
	return (
		<MaterialPageProvider>
			{children}
		</MaterialPageProvider>
	)
}

export default Layout;
