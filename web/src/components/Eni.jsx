import React from 'react';

export default function Eni() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      padding: '40px 20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* 页面标题 */}
        <div style={{
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <h1 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#1e293b',
            margin: '0 0 16px 0',
            textShadow: '0 1px 2px rgba(0,0,0,0.05)'
          }}>
            ENI (Elastic Network Interface)
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#64748b',
            opacity: 1,
            margin: 0
          }}>
            弹性网络接口项目经历
          </p>
        </div>

        {/* 项目架构图 */}
        <div style={{
          background: '#ffffff',
          borderRadius: '16px',
          padding: '32px',
          marginBottom: '32px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
          border: '1px solid #e2e8f0',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#334155',
            margin: '0 0 24px 0'
          }}>
            ENI 架构设计
          </h2>
          
          {/* 架构图容器 */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '400px',
            background: '#f1f5f9',
            borderRadius: '8px',
            border: '2px dashed #cbd5e1'
          }}>
            <div style={{
              color: '#64748b',
              fontSize: '16px',
              padding: '40px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🌐</div>
              <p style={{ margin: '0 0 8px 0', fontWeight: '600' }}>ENI 网络架构图</p>
              <p style={{ fontSize: '14px', margin: 0, lineHeight: '1.5' }}>
                弹性网络接口虚拟化架构<br/>
                支持多ENI绑定和热插拔
              </p>
            </div>
          </div>
        </div>

        {/* 技术实现 */}
        <div style={{
          background: '#ffffff',
          borderRadius: '16px',
          padding: '32px',
          marginBottom: '32px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
          border: '1px solid #e2e8f0'
        }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#334155',
            margin: '0 0 24px 0',
            textAlign: 'center'
          }}>
            核心功能特性
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '24px'
          }}>
            {[
              { 
                icon: '🔗', 
                title: '多ENI绑定', 
                desc: '支持单实例绑定多个弹性网络接口，提供高可用网络架构' 
              },
              { 
                icon: '🏷️', 
                title: '独立地址', 
                desc: '每个ENI拥有独立的MAC地址和内网IP地址，实现网络隔离' 
              },
              { 
                icon: '🛡️', 
                title: '安全组配置', 
                desc: '支持对每个ENI独立配置安全组规则，精细化访问控制' 
              },
              { 
                icon: '🔄', 
                title: '热插拔功能', 
                desc: '支持运行时动态添加和移除ENI，无需重启实例' 
              }
            ].map(feature => (
              <div 
                key={feature.title}
                style={{
                  background: '#f1f5f9',
                  padding: '24px',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>
                  {feature.icon}
                </div>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#334155',
                  margin: '0 0 12px 0'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#64748b',
                  margin: 0,
                  lineHeight: '1.5'
                }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 技术栈 */}
        <div style={{
          background: '#ffffff',
          borderRadius: '16px',
          padding: '32px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
          border: '1px solid #e2e8f0'
        }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#334155',
            margin: '0 0 24px 0',
            textAlign: 'center'
          }}>
            技术栈与实现
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '16px'
          }}>
            {[
              { name: 'Java/Spring Boot', desc: '后端服务开发' },
              { name: 'OpenStack Neutron', desc: '网络服务管理' },
              { name: 'Docker/Kubernetes', desc: '容器化部署' },
              { name: 'Redis/MySQL', desc: '数据存储' },
              { name: 'Prometheus/Grafana', desc: '监控告警' },
              { name: 'Terraform', desc: '基础设施即代码' }
            ].map(tech => (
              <div 
                key={tech.name}
                style={{
                  background: '#f1f5f9',
                  padding: '16px',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0'
                }}
              >
                <div style={{ fontWeight: '600', color: '#334155', marginBottom: '4px' }}>
                  {tech.name}
                </div>
                <div style={{ fontSize: '14px', color: '#64748b' }}>
                  {tech.desc}
                </div>
              </div>
            ))}
          </div>

          {/* 说明文本 */}
          <div style={{
            marginTop: '24px',
            padding: '16px',
            background: '#f1f5f9',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '14px',
              color: '#64748b',
              margin: 0,
              lineHeight: '1.5'
            }}>
              🌐 ENI基于虚拟化网络技术实现，通过SDN控制器管理网络流量，支持VLAN和VxLAN等网络隔离技术
              <br />
              集成负载均衡和高可用机制，为云服务器提供灵活可靠的网络连接方案
            </p>
          </div>
        </div>

        {/* 导航按钮 */}
        <div style={{
          textAlign: 'center',
          marginTop: '40px'
        }}>
          <button
            onClick={() => window.history.back()}
            style={{
              background: '#3b82f6',
              color: '#ffffff',
              border: 'none',
              padding: '12px 32px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#2563eb';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#3b82f6';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(59, 130, 246, 0.3)';
            }}
          >
            ← 返回上一页
          </button>
        </div>
      </div>
    </div>
  );
}