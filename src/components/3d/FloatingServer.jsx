
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere, Torus } from '@react-three/drei';
import * as THREE from 'three';

export default function FloatingServer() {
    const groupRef = useRef(null);
    const mainRef = useRef(null);
    const ringRef = useRef(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
        }
        if (mainRef.current) {
            mainRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
            mainRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
        }
        if (ringRef.current) {
            ringRef.current.rotation.x = state.clock.elapsedTime * 0.4;
            ringRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.6) * 0.2;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Central Core */}
            <Sphere ref={mainRef} args={[1.2, 32, 32]} position={[0, 0, 0]}>
                <meshStandardMaterial
                    color="#1f2937"
                    metalness={0.9}
                    roughness={0.1}
                    emissive="#ef305e"
                    emissiveIntensity={0.1}
                />
            </Sphere>

            {/* Rotating Ring */}
            <Torus
                ref={ringRef}
                args={[2.5, 0.1, 8, 32]}
                position={[0, 0, 0]}
            >
                <meshStandardMaterial
                    color="#ef305e"
                    metalness={0.8}
                    roughness={0.2}
                    emissive="#ef305e"
                    emissiveIntensity={0.3}
                />
            </Torus>

            {/* Floating Data Nodes */}
            {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i / 8) * Math.PI * 2;
                const radius = 3.5;
                return (
                    <Box
                        key={i}
                        args={[0.15, 0.15, 0.15]}
                        position={[
                            Math.cos(angle) * radius,
                            Math.sin(angle * 0.5) * 1.5,
                            Math.sin(angle) * radius
                        ]}
                    >
                        <meshStandardMaterial
                            color="#ef305e"
                            emissive="#ef305e"
                            emissiveIntensity={0.4}
                            metalness={0.7}
                            roughness={0.3}
                        />
                    </Box>
                );
            })}

            {/* Orbiting Particles */}
            {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i / 12) * Math.PI * 2;
                const radius = 4.5;
                return (
                    <Sphere
                        key={`particle-${i}`}
                        args={[0.05, 8, 8]}
                        position={[
                            Math.cos(angle + Date.now() * 0.001) * radius,
                            Math.sin(i * 0.5) * 2,
                            Math.sin(angle + Date.now() * 0.001) * radius
                        ]}
                    >
                        <meshStandardMaterial
                            color="#ffffff"
                            emissive="#ef305e"
                            emissiveIntensity={0.6}
                        />
                    </Sphere>
                );
            })}
        </group>
    );
}
