import React from 'react';

export default function CrossZoneMigration() {
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
            Cross-Zone Migration
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#64748b',
            opacity: 1,
            margin: 0
          }}>
            跨可用区迁移项目经历
          </p>
        </div>

        {/* 迁移架构图 */}
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
            迁移架构设计
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
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔄</div>
              <p style={{ margin: '0 0 8px 0', fontWeight: '600' }}>跨可用区迁移架构图</p>
              <p style={{ fontSize: '14px', margin: 0, lineHeight: '1.5' }}>
                实时状态同步与数据复制<br/>
                零停机时间迁移解决方案
              </p>
            </div>
          </div>
        </div>

        {/* 核心技术挑战 */}
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
            核心技术挑战
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '24px'
          }}>
            {[
              { 
                icon: '🔄', 
                title: '实时状态同步', 
                desc: '保证迁移过程中应用状态的实时同步和数据复制，确保数据一致性' 
              },
              { 
                icon: '🌐', 
                title: '网络拓扑重配置', 
                desc: '动态重新配置网络拓扑，保持IP地址不变，确保网络连接连续性' 
              },
              { 
                icon: '💾', 
                title: '存储卷迁移', 
                desc: '实现存储卷的跨区域迁移，保证数据完整性和存储性能' 
              },
              { 
                icon: '⚡', 
                title: '性能优化', 
                desc: '迁移过程中的性能优化，最小化对业务的影响和停机时间' 
              }
            ].map(challenge => (
              <div 
                key={challenge.title}
                style={{
                  background: '#f1f5f9',
                  padding: '24px',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>
                  {challenge.icon}
                </div>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#334155',
                  margin: '0 0 12px 0'
                }}>
                  {challenge.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#64748b',
                  margin: 0,
                  lineHeight: '1.5'
                }}>
                  {challenge.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 技术栈与实现 */}
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
            技术栈与实现方案
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '16px',
            marginBottom: '24px'
          }}>
            {[
              { name: 'Go/Python', desc: '迁移控制器开发' },
              { name: 'QEMU/KVM', desc: '虚拟化平台' },
              { name: 'Ceph/GlusterFS', desc: '分布式存储' },
              { name: 'OpenStack', desc: '云平台管理' },
              { name: 'etcd/Consul', desc: '配置管理' },
              { name: 'Ansible', desc: '自动化运维' }
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
              🚀 基于虚拟化技术的热迁移，通过分布式存储系统和SDN网络控制器协调
              <br />
              智能调度算法优化迁移过程，实现业务连续性和灾难恢复能力
            </p>
          </div>
        </div>

        {/* 项目成果 */}
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
            项目成果展示
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            marginBottom: '24px'
          }}>
            {[
              { metric: '99.9%', desc: '迁移成功率' },
              { metric: '<30s', desc: '平均停机时间' },
              { metric: '50%+', desc: '性能提升' },
              { metric: '0', desc: '数据丢失事件' }
            ].map(item => (
              <div 
                key={item.metric}
                style={{
                  textAlign: 'center',
                  padding: '24px',
                  background: '#f1f5f9',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0'
                }}
              >
                <div style={{
                  fontSize: '32px',
                  fontWeight: '700',
                  color: '#3b82f6',
                  marginBottom: '8px'
                }}>
                  {item.metric}
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#64748b'
                }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

          {/* 成果说明 */}
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
              📈 项目成功实现了高可用的跨可用区迁移能力，大幅提升了系统的灾难恢复能力
              <br />
              为用户提供了无感知的业务连续性保障，获得了显著的业务价值
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