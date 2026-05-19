// Modal HTML and CSS to add before </body>

const modalHTML = `
<style>
.modal-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9999;
  animation: fadeIn 0.2s;
}

.modal-overlay.active {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.modal-content {
  background: white;
  border-radius: 16px;
  max-width: 700px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s;
}

@keyframes slideUp {
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.modal-header {
  padding: 24px 28px;
  border-bottom: 1px solid #E0E0E0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h3 {
  font-size: 22px;
  font-weight: 700;
  color: #212121;
  margin: 0;
}

.modal-close {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #F5F7FA;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #757575;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.modal-close:hover {
  background: #E0E0E0;
  color: #212121;
}

.modal-body {
  padding: 28px;
}

.modal-body h4 {
  font-size: 16px;
  font-weight: 600;
  color: #212121;
  margin-bottom: 12px;
  margin-top: 20px;
}

.modal-body h4:first-child {
  margin-top: 0;
}

.modal-body p {
  color: #757575;
  line-height: 1.6;
  margin-bottom: 12px;
}

.modal-body ul {
  margin-left: 20px;
  color: #757575;
  line-height: 1.8;
}

.modal-body ul li {
  margin-bottom: 8px;
}

.modal-footer {
  padding: 20px 28px;
  border-top: 1px solid #E0E0E0;
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}

.modal-btn {
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
}

.modal-btn-primary {
  background: #3D5AFE;
  color: white;
}

.modal-btn-primary:hover {
  background: #304FFE;
}

.modal-btn-secondary {
  background: #F5F7FA;
  color: #212121;
}

.modal-btn-secondary:hover {
  background: #E0E0E0;
}
</style>

<div id="resourceModal" class="modal-overlay">
  <div class="modal-content">
    <div class="modal-header">
      <h3 id="modalTitle">Resource Title</h3>
      <button class="modal-close" onclick="closeModal()">×</button>
    </div>
    <div class="modal-body" id="modalBody">
      <!-- Content will be inserted here -->
    </div>
    <div class="modal-footer">
      <button class="modal-btn modal-btn-secondary" onclick="closeModal()">Close</button>
    </div>
  </div>
</div>
`;

// Resource content data
const resourceContent = {
  'sop-manual-review': {
    title: 'SFS Square Loan Manual Review Credit Operations SOP V2',
    content: `
      <h4>📋 Overview</h4>
      <p>This SOP outlines the procedures for manual review of Square Loan applications in credit operations.</p>
      
      <h4>🎯 Key Objectives</h4>
      <ul>
        <li>Ensure compliance with lending regulations</li>
        <li>Verify merchant identity and business legitimacy</li>
        <li>Assess credit risk accurately</li>
        <li>Document all review decisions thoroughly</li>
      </ul>
      
      <h4>📝 Review Process</h4>
      <ul>
        <li><strong>Step 1:</strong> Identity Verification (IDV) - Verify merchant identity documents</li>
        <li><strong>Step 2:</strong> TIN Verification - Validate Tax Identification Number</li>
        <li><strong>Step 3:</strong> Bank Statement Review - Analyze financial health</li>
        <li><strong>Step 4:</strong> Credit Risk Assessment - Evaluate risk factors</li>
        <li><strong>Step 5:</strong> Final Decision - Approve, decline, or request additional info</li>
      </ul>
      
      <h4>⚠️ Important Notes</h4>
      <ul>
        <li>All documents must be current (not expired)</li>
        <li>Bank statements must be within last 6 months</li>
        <li>TIN must match business name exactly</li>
        <li>Document all decisions in case notes</li>
      </ul>
    `
  },
  'sop-compliance-review': {
    title: 'Square Loan Application Compliance Review Flow SOP V3',
    content: `
      <h4>📋 Overview</h4>
      <p>Version 3 of the compliance review flow introduces streamlined procedures for faster, more accurate reviews.</p>
      
      <h4>🔄 Updated Workflow</h4>
      <ul>
        <li><strong>Intake:</strong> Application enters compliance queue</li>
        <li><strong>Triage:</strong> Automated checks flag potential issues</li>
        <li><strong>Manual Review:</strong> Agent reviews flagged items</li>
        <li><strong>Decision:</strong> Approve, decline, or SSP (request more info)</li>
        <li><strong>Quality Check:</strong> Random sample reviewed by QA team</li>
      </ul>
      
      <h4>🎯 Key Changes in V3</h4>
      <ul>
        <li>Reduced review time from 48 to 24 hours</li>
        <li>New automated fraud detection</li>
        <li>Enhanced SSP templates</li>
        <li>Improved escalation pathways</li>
      </ul>
      
      <h4>📊 Performance Metrics</h4>
      <ul>
        <li>Target accuracy: 95% or higher</li>
        <li>Average review time: 20 minutes per case</li>
        <li>SSP response rate: 80% within 48 hours</li>
      </ul>
    `
  },
  'sop-revised-offers': {
    title: 'Square Loans Revised Offers SOP V2',
    content: `
      <h4>📋 Overview</h4>
      <p>Procedures for handling revised loan offers when initial offer is declined or merchant requests different terms.</p>
      
      <h4>🔄 When to Issue Revised Offers</h4>
      <ul>
        <li>Merchant provides additional documentation</li>
        <li>Credit risk assessment changes</li>
        <li>Merchant requests lower loan amount</li>
        <li>Business circumstances improve</li>
      </ul>
      
      <h4>📝 Revised Offer Process</h4>
      <ul>
        <li><strong>Step 1:</strong> Review new information provided</li>
        <li><strong>Step 2:</strong> Re-assess credit risk with updated data</li>
        <li><strong>Step 3:</strong> Calculate new loan terms if applicable</li>
        <li><strong>Step 4:</strong> Document rationale for revised offer</li>
        <li><strong>Step 5:</strong> Send revised offer to merchant</li>
      </ul>
      
      <h4>⚠️ Important Guidelines</h4>
      <ul>
        <li>Maximum 2 revised offers per application</li>
        <li>Must document reason for each revision</li>
        <li>Revised terms must be within risk parameters</li>
        <li>Merchant has 7 days to accept revised offer</li>
      </ul>
    `
  },
  'sop-eligibility': {
    title: 'Square Loan Eligibility Re-assessment SOP',
    content: `
      <h4>📋 Overview</h4>
      <p>Guidelines for re-assessing loan eligibility outside of system-generated parameters.</p>
      
      <h4>🎯 When to Re-assess</h4>
      <ul>
        <li>Merchant appeals automatic decline</li>
        <li>New information becomes available</li>
        <li>System error suspected</li>
        <li>Special circumstances warrant review</li>
      </ul>
      
      <h4>📝 Re-assessment Process</h4>
      <ul>
        <li><strong>Step 1:</strong> Verify reason for re-assessment request</li>
        <li><strong>Step 2:</strong> Review original decline rationale</li>
        <li><strong>Step 3:</strong> Analyze new information or circumstances</li>
        <li><strong>Step 4:</strong> Consult with credit risk team if needed</li>
        <li><strong>Step 5:</strong> Document decision and notify merchant</li>
      </ul>
      
      <h4>⚠️ Important Considerations</h4>
      <ul>
        <li>Must have valid business reason for override</li>
        <li>All overrides require supervisor approval</li>
        <li>Document rationale thoroughly</li>
        <li>Track override rates for quality monitoring</li>
      </ul>
    `
  },
  'sop-escalation': {
    title: 'SFS Square Loans | Credit Risk Escalation SOP',
    content: `
      <h4>📋 Overview</h4>
      <p>Procedures for escalating high-risk or complex cases to senior credit risk team.</p>
      
      <h4>🚨 When to Escalate</h4>
      <ul>
        <li>Fraud indicators detected</li>
        <li>Unusual business circumstances</li>
        <li>Policy interpretation unclear</li>
        <li>High-value loans ($100K+)</li>
        <li>Conflicting information in documents</li>
        <li>Merchant has history of defaults</li>
      </ul>
      
      <h4>📝 Escalation Process</h4>
      <ul>
        <li><strong>Step 1:</strong> Document all findings and concerns</li>
        <li><strong>Step 2:</strong> Tag case with escalation flag</li>
        <li><strong>Step 3:</strong> Notify supervisor via Slack</li>
        <li><strong>Step 4:</strong> Provide summary of issue</li>
        <li><strong>Step 5:</strong> Wait for senior review (SLA: 4 hours)</li>
      </ul>
      
      <h4>⚠️ Escalation Guidelines</h4>
      <ul>
        <li>Never approve suspicious cases without escalation</li>
        <li>Include all relevant documentation</li>
        <li>Clearly state your recommendation</li>
        <li>Follow up if no response within SLA</li>
      </ul>
    `
  },
  'sop-stl': {
    title: 'Short Term Loan (STL) Compliance Application Review',
    content: `
      <h4>📋 Overview</h4>
      <p>Specific procedures for reviewing Short Term Loan applications, which have different requirements than standard loans.</p>
      
      <h4>🎯 STL-Specific Requirements</h4>
      <ul>
        <li>Loan term: 3-12 months (vs 12-18 for standard)</li>
        <li>Lower documentation requirements</li>
        <li>Faster approval process (24-hour target)</li>
        <li>Different risk thresholds</li>
      </ul>
      
      <h4>📝 STL Review Process</h4>
      <ul>
        <li><strong>Step 1:</strong> Verify STL eligibility criteria</li>
        <li><strong>Step 2:</strong> Expedited IDV (ID + TIN only)</li>
        <li><strong>Step 3:</strong> Bank statement review (last 3 months)</li>
        <li><strong>Step 4:</strong> Quick credit risk assessment</li>
        <li><strong>Step 5:</strong> Approve or decline within 24 hours</li>
      </ul>
      
      <h4>⚠️ STL Considerations</h4>
      <ul>
        <li>Higher interest rates due to shorter term</li>
        <li>Older bank statements acceptable (up to 90 days)</li>
        <li>Streamlined SSP process</li>
        <li>Lower approval thresholds</li>
      </ul>
    `
  },
  'tool-sos': {
    title: 'Secretary of State (SOS) Business Search',
    content: `
      <h4>🔍 Overview</h4>
      <p>Use the Secretary of State business search to verify business registration and legal status.</p>
      
      <h4>🎯 What to Verify</h4>
      <ul>
        <li>Business name matches application</li>
        <li>Business is active (not dissolved)</li>
        <li>Entity type is correct (LLC, Corp, etc.)</li>
        <li>Registration date</li>
        <li>Principal address</li>
        <li>Registered agent information</li>
      </ul>
      
      <h4>📝 How to Use</h4>
      <ul>
        <li><strong>Step 1:</strong> Go to state's SOS website</li>
        <li><strong>Step 2:</strong> Search by business name or entity number</li>
        <li><strong>Step 3:</strong> Verify all details match application</li>
        <li><strong>Step 4:</strong> Screenshot results for documentation</li>
        <li><strong>Step 5:</strong> Note any discrepancies in case notes</li>
      </ul>
      
      <h4>⚠️ Red Flags</h4>
      <ul>
        <li>Business not found in SOS database</li>
        <li>Status shows "Dissolved" or "Suspended"</li>
        <li>Name doesn't match application</li>
        <li>Recently formed (less than 6 months)</li>
        <li>Multiple entities with similar names</li>
      </ul>
      
      <h4>🔗 Common State SOS Links</h4>
      <ul>
        <li>California: sos.ca.gov</li>
        <li>New York: dos.ny.gov</li>
        <li>Texas: sos.state.tx.us</li>
        <li>Florida: dos.myflorida.com</li>
      </ul>
    `
  },
  'tool-regulator': {
    title: 'Regulator - Merchant Lookup Tool',
    content: `
      <h4>🔍 Overview</h4>
      <p>Internal Block tool for looking up merchant information, transaction history, and account status.</p>
      
      <h4>🎯 What You Can Find</h4>
      <ul>
        <li>Merchant account details</li>
        <li>Processing history</li>
        <li>Previous loan applications</li>
        <li>Chargeback rates</li>
        <li>Account holds or flags</li>
        <li>Contact information</li>
      </ul>
      
      <h4>📝 How to Use Regulator</h4>
      <ul>
        <li><strong>Step 1:</strong> Log in to regulator.sqprod.co</li>
        <li><strong>Step 2:</strong> Search by merchant ID, email, or business name</li>
        <li><strong>Step 3:</strong> Review account overview</li>
        <li><strong>Step 4:</strong> Check processing history tab</li>
        <li><strong>Step 5:</strong> Review any notes or flags</li>
      </ul>
      
      <h4>⚠️ Key Indicators to Check</h4>
      <ul>
        <li><strong>Processing Volume:</strong> Consistent or declining?</li>
        <li><strong>Chargeback Rate:</strong> Should be <1%</li>
        <li><strong>Account Age:</strong> Longer is better</li>
        <li><strong>Previous Loans:</strong> Payment history</li>
        <li><strong>Flags:</strong> Any fraud or compliance flags?</li>
      </ul>
      
      <h4>💡 Pro Tips</h4>
      <ul>
        <li>Always check linked accounts</li>
        <li>Review seasonal patterns</li>
        <li>Compare stated revenue to processing volume</li>
        <li>Check for recent account changes</li>
      </ul>
    `
  },
  'tool-apporchard': {
    title: 'AppOrchard - Application Review System',
    content: `
      <h4>🔍 Overview</h4>
      <p>AppOrchard is the primary system for reviewing and managing loan applications.</p>
      
      <h4>🎯 Key Features</h4>
      <ul>
        <li>Application queue management</li>
        <li>Document viewer</li>
        <li>Case notes and history</li>
        <li>SSP request templates</li>
        <li>Approval/decline workflows</li>
        <li>Reporting and metrics</li>
      </ul>
      
      <h4>📝 How to Navigate</h4>
      <ul>
        <li><strong>Queue Tab:</strong> View assigned applications</li>
        <li><strong>Application Details:</strong> Merchant info and documents</li>
        <li><strong>Documents Tab:</strong> View uploaded files</li>
        <li><strong>Notes Tab:</strong> Add case notes</li>
        <li><strong>Actions Menu:</strong> Approve, decline, or SSP</li>
      </ul>
      
      <h4>⚠️ Best Practices</h4>
      <ul>
        <li>Always review all documents before decision</li>
        <li>Document your reasoning in notes</li>
        <li>Use templates for SSP requests</li>
        <li>Check for duplicate applications</li>
        <li>Update case status regularly</li>
      </ul>
      
      <h4>🔧 Common Actions</h4>
      <ul>
        <li><strong>Approve:</strong> Combos → Approve Application</li>
        <li><strong>Decline:</strong> Combos → Decline with Adverse Action</li>
        <li><strong>SSP:</strong> Actions → Send SSP Request</li>
        <li><strong>Escalate:</strong> Actions → Escalate to Supervisor</li>
      </ul>
    `
  },
  'tool-credit-risk': {
    title: 'Credit Risk Assessment Tools',
    content: `
      <h4>🔍 Overview</h4>
      <p>Suite of tools for evaluating merchant credit risk and making informed lending decisions.</p>
      
      <h4>🎯 Available Tools</h4>
      <ul>
        <li><strong>Credit Score Calculator:</strong> Proprietary scoring model</li>
        <li><strong>Risk Matrix:</strong> Visual risk assessment</li>
        <li><strong>Industry Benchmarks:</strong> Compare to similar businesses</li>
        <li><strong>Fraud Detection:</strong> Automated fraud indicators</li>
        <li><strong>Payment Predictor:</strong> Likelihood of default</li>
      </ul>
      
      <h4>📝 How to Assess Risk</h4>
      <ul>
        <li><strong>Step 1:</strong> Input merchant financial data</li>
        <li><strong>Step 2:</strong> Review automated risk score</li>
        <li><strong>Step 3:</strong> Check industry benchmarks</li>
        <li><strong>Step 4:</strong> Review fraud indicators</li>
        <li><strong>Step 5:</strong> Make final risk determination</li>
      </ul>
      
      <h4>⚠️ Risk Factors to Consider</h4>
      <ul>
        <li>Time in business (prefer 2+ years)</li>
        <li>Processing volume trends</li>
        <li>Chargeback rates</li>
        <li>Industry risk level</li>
        <li>Geographic location</li>
        <li>Seasonal variations</li>
      </ul>
      
      <h4>🚨 High Risk Indicators</h4>
      <ul>
        <li>New business (<6 months)</li>
        <li>Declining revenue</li>
        <li>High chargeback rate (>1%)</li>
        <li>High-risk industry (gambling, crypto)</li>
        <li>Multiple recent loan applications</li>
      </ul>
    `
  }
};

// Function to open modal
function openResourceModal(resourceId) {
  const modal = document.getElementById('resourceModal');
  const resource = resourceContent[resourceId];
  
  if (resource) {
    document.getElementById('modalTitle').textContent = resource.title;
    document.getElementById('modalBody').innerHTML = resource.content;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

// Function to close modal
function closeModal() {
  const modal = document.getElementById('resourceModal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
  const modal = document.getElementById('resourceModal');
  if (e.target === modal) {
    closeModal();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});
