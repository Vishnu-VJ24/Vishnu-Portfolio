'use client'

import { Suspense, lazy } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
    scene: string
    className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
    return (
        <ErrorBoundary fallback={<div className="w-full h-full flex items-center justify-center text-white/50 text-sm">3D Scene Unavailable</div>}>
            <Suspense
                fallback={
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="loader"></span>
                    </div>
                }
            >
                <Spline
                    scene={scene}
                    className={className}
                />
            </Suspense>
        </ErrorBoundary>
    )
}
