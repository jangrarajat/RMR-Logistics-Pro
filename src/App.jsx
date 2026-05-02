// App.jsx
import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    issueType: 'Technical Issue',
    userName: 'Rajat Jangra',
    userEmail: 'raahiwab@gmail.com',
    companyName: 'Webraahi logistic',
    problemDesc: '',
    screenshot: null
  });
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: '' }), 4000);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, screenshot: e.target.files[0] }));
  };

  const handleSupportSubmit = (e) => {
    e.preventDefault();
    const { userName, userEmail, companyName, issueType, problemDesc } = formData;
    if (!userName || !userEmail || !companyName || !problemDesc) {
      showToast('Please fill all required fields (Name, Email, Company, Problem).', 'error');
      return;
    }
    const subject = `RMR Support: ${issueType} from ${companyName}`;
    const body = `Name: ${userName}\nCompany: ${companyName}\nEmail: ${userEmail}\nIssue Type: ${issueType}\n\nDescription:\n${problemDesc}\n\n--- This support request was sent from RMR Logistics Pro portal.`;
    window.location.href = `mailto:support@rmrlogisticspro.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    showToast('Support request opened in your email client. Click send — we will respond within 24 hours!', 'success');
    setFormData(prev => ({ ...prev, problemDesc: '', screenshot: null }));
    document.getElementById('screenshotFile') && (document.getElementById('screenshotFile').value = '');
  };

  const clearForm = () => {
    setFormData({
      issueType: 'Technical Issue',
      userName: 'Rajat Jangra',
      userEmail: 'raahiwab@gmail.com',
      companyName: 'Webraahi logistic',
      problemDesc: '',
      screenshot: null
    });
    if (document.getElementById('screenshotFile')) document.getElementById('screenshotFile').value = '';
    showToast('Form cleared.', 'info');
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-['Inter',sans-serif] bg-white text-slate-800">
      {/* Toast Notification */}
      {toast.show && (
        <div className={`fixed bottom-6 right-6 z-50 px-5 py-3 rounded-full text-white text-sm shadow-lg ${toast.type === 'error' ? 'bg-red-600' : 'bg-slate-800'}`}>
          {toast.message}
        </div>
      )}

      {/* Navigation */}
      <nav className="py-5 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center flex-wrap gap-4">
          <div className="font-extrabold text-2xl tracking-tight">
            <span className="text-orange-500">RMR</span> Logistics Pro
          </div>
          <div className="flex gap-6 text-sm md:text-base">
            <button onClick={() => scrollToSection('features')} className="text-slate-700 font-medium hover:text-orange-500 transition">Features</button>
            <button onClick={() => scrollToSection('reports')} className="text-slate-700 font-medium hover:text-orange-500 transition">Reports</button>
            <button onClick={() => scrollToSection('support')} className="text-slate-700 font-medium hover:text-orange-500 transition">Help & Support</button>
            <button onClick={() => scrollToSection('login')} className="text-orange-600 font-semibold hover:text-orange-700 transition">Secure Login</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
              <i className="fas fa-chalkboard-user"></i> Smart Transport Solution
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
              Drive Your Business Forward with <span className="text-orange-500">RMR Logistics Pro</span>
            </h1>
            <p className="text-lg text-slate-600 mt-6 mb-8">
              Complete digital solution for transport businesses. Manage vehicles, drivers, Bilty, petrol pump records, track revenue, and optimize operations — all in one secure platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollToSection('demo')} className="inline-flex items-center gap-2 bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-orange-600 transition transform hover:-translate-y-0.5">
                <i className="fas fa-arrow-right"></i> Get Started →
              </button>
              <button onClick={() => scrollToSection('login')} className="inline-flex items-center gap-2 border-2 border-orange-500 text-orange-600 font-semibold px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transition">
                <i className="fas fa-lock"></i> Sign In
              </button>
            </div>
            <div className="flex flex-wrap gap-8 mt-10">
              <div><h4 className="text-3xl font-extrabold text-orange-500">500+</h4><p className="text-slate-500">Transport Companies</p></div>
              <div><h4 className="text-3xl font-extrabold text-orange-500">50K+</h4><p className="text-slate-500">Trips Completed</p></div>
              <div><h4 className="text-3xl font-extrabold text-orange-500">24/7</h4><p className="text-slate-500">Support Available</p></div>
            </div>
          </div>
          <div className="flex-1">
            <img src="https://placehold.co/600x450/1e293b/f97316?text=RMR+Logistics+Pro+Dashboard" alt="RMR Logistics Pro Dashboard" className="w-full rounded-3xl shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Complete Transport ERP</div>
            <h2 className="text-3xl md:text-4xl font-bold">Everything you need to run your logistics business</h2>
            <p className="text-slate-500 mt-3">From vehicle tracking to automated accounting — one platform, infinite control</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "fas fa-truck", title: "Vehicles Management", desc: "Add unlimited vehicles, track fitness, insurance, RC, and get vehicle-wise reports with one click." },
              { icon: "fas fa-id-card", title: "Drivers & Salary", desc: "Driver database, salary tracking, advance, attendance, and complete payment history." },
              { icon: "fas fa-file-invoice", title: "Bilty Manager", desc: "Create, edit, print Bilty/LR. Auto LR number generation, signature & stamp upload, PDF print." },
              { icon: "fas fa-gas-pump", title: "Petrol Pump Records", desc: "Track diesel/petrol expenses by pump with opening/closing balances payable." },
              { icon: "fas fa-book", title: "Cash Book & Accounting", desc: "Daily entry system — automatic profit/loss, ledger, party balance. One-click account reports." },
              { icon: "fas fa-chart-line", title: "Reports & Analytics", desc: "Vehicle-wise profit, trip summary, commission — all exportable to Excel/PDF." },
              { icon: "fas fa-print", title: "Print & Export", desc: "Every report, Bilty, or ledger can be printed or downloaded as Excel. One-click export." },
              { icon: "fas fa-shield-alt", title: "Secure Login", desc: "Role-based secure authentication. Your data is encrypted and private — only authorized access." }
            ].map((feat, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-7 shadow-md border border-stone-100 hover:-translate-y-1 transition duration-200">
                <i className={`${feat.icon} text-3xl text-orange-500 mb-5`}></i>
                <h3 className="text-xl font-bold mb-2">{feat.title}</h3>
                <p className="text-slate-500 text-sm">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports & Digital Section */}
      <div id="reports" className="max-w-7xl mx-auto px-6 md:px-8 my-6">
        <div className="bg-stone-50 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1 bg-white rounded-2xl p-7 shadow-sm">
              <h3 className="text-2xl font-bold mb-5"><i className="fas fa-chart-simple text-orange-500 mr-2"></i> One-click Reports & Vehicle-wise Analytics</h3>
              <div className="space-y-5">
                {["Vehicle-wise profit report — each vehicle's freight, expenses, diesel, commission separate ledger with one click.",
                  "Export to Excel / Print — all data: trip list, Bilty register, cash book, driver salary export or print instantly.",
                  "Auto Accounting System — daily entries automatically update party balance, P&L, and general ledger.",
                  "Other People Transactions — track money given/received from suppliers, brokers with full statement."].map((text, i) => (
                  <div key={i} className="flex gap-4"><div className="bg-orange-50 w-10 h-10 rounded-full flex items-center justify-center text-orange-500"><i className="fas fa-check"></i></div><div>{text}</div></div>
                ))}
              </div>
            </div>
            <div className="flex-1 bg-white rounded-2xl p-7 shadow-sm">
              <h3 className="text-2xl font-bold mb-5"><i className="fas fa-tachometer-alt text-orange-500 mr-2"></i> Smart Financial Tracking</h3>
              <div className="space-y-5">
                {["Advance & Commission Tracking — Driver advances, broker commission fully tracked per trip.",
                  "Diesel Pump-wise Balance — separate payable/receivable for each petrol pump with opening/closing balance.",
                  "Freight & Payment Status — track amount due, paid, balance with color-coded reminders.",
                  "Bilty with GST & Declaration — print Bilty with consignee signature, stamp, declaration, ready for legal compliance."].map((text, i) => (
                  <div key={i} className="flex gap-4"><div className="bg-orange-50 w-10 h-10 rounded-full flex items-center justify-center text-orange-500"><i className="fas fa-chart-line"></i></div><div>{text}</div></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Help & Support Section */}
      <section id="support" className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="bg-amber-50 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4"><i className="fas fa-headset"></i> 24/7 Direct Support</div>
              <h2 className="text-3xl md:text-4xl font-bold">Help & Support Center</h2>
              <p className="text-slate-600 mt-2 max-w-2xl mx-auto">We're here to help! Fill out the form below and we'll get back to you ASAP — email sent directly to our support team.</p>
              <div className="flex flex-wrap justify-center gap-4 mt-5 text-sm">
                <span><i className="fas fa-check-circle text-orange-500"></i> Select issue type</span>
                <span><i className="fas fa-check-circle text-orange-500"></i> Describe problem in detail</span>
                <span><i className="fas fa-check-circle text-orange-500"></i> Attach screenshot (optional)</span>
                <span><i className="fas fa-check-circle text-orange-500"></i> Response within 24 hours</span>
              </div>
            </div>
            <form onSubmit={handleSupportSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-semibold"><i className="fas fa-tag"></i> Issue Type</label>
                <select id="issueType" value={formData.issueType} onChange={handleInputChange} className="p-3.5 border border-slate-200 rounded-2xl focus:border-orange-400 focus:outline-none">
                  <option>Technical Issue</option><option>Billing / Payment</option><option>Feature Request</option><option>Account Access</option><option>General Query</option>
                </select>
              </div>
              <div className="flex flex-col gap-2"><label className="font-semibold"><i className="fas fa-user"></i> Your Name</label><input type="text" id="userName" value={formData.userName} onChange={handleInputChange} className="p-3.5 border border-slate-200 rounded-2xl focus:border-orange-400" /></div>
              <div className="flex flex-col gap-2"><label className="font-semibold"><i className="fas fa-envelope"></i> Email Address</label><input type="email" id="userEmail" value={formData.userEmail} onChange={handleInputChange} className="p-3.5 border border-slate-200 rounded-2xl" /></div>
              <div className="flex flex-col gap-2"><label className="font-semibold"><i className="fas fa-building"></i> Company Name</label><input type="text" id="companyName" value={formData.companyName} onChange={handleInputChange} className="p-3.5 border border-slate-200 rounded-2xl" /></div>
              <div className="md:col-span-2 flex flex-col gap-2"><label className="font-semibold"><i className="fas fa-comment-dots"></i> Describe your problem</label><textarea rows="4" id="problemDesc" value={formData.problemDesc} onChange={handleInputChange} className="p-3.5 border border-slate-200 rounded-2xl" placeholder="Please provide as much detail as possible..."></textarea></div>
              <div className="md:col-span-2 flex flex-col gap-2"><label className="font-semibold"><i className="fas fa-camera"></i> Screenshot (optional, max 5MB)</label><input type="file" id="screenshotFile" onChange={handleFileChange} className="p-2" /></div>
              <div className="md:col-span-2 flex gap-4 justify-end">
                <button type="button" onClick={clearForm} className="px-6 py-2.5 bg-slate-200 rounded-full font-semibold">Cancel</button>
                <button type="submit" className="px-6 py-2.5 bg-orange-500 text-white rounded-full font-semibold flex items-center gap-2"><i className="fas fa-paper-plane"></i> Send Support Request</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Secure Login Section */}
      <section id="login" className="py-16 mx-6 md:mx-8 bg-slate-100 rounded-3xl mb-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <i className="fas fa-lock text-5xl text-orange-500 mb-4"></i>
          <h2 className="text-3xl md:text-4xl font-bold">Secure Login to RMR Logistics Pro</h2>
          <p className="text-slate-600 max-w-lg mx-auto mt-3 mb-10">Enterprise-grade security. Each user gets role-based access — Admin, Accountant, Driver, or Viewer.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white p-7 rounded-2xl min-w-[220px] shadow"><i className="fas fa-user-shield text-3xl text-orange-500"></i><h3 className="font-bold text-xl mt-3">Admin Access</h3><p className="text-sm text-slate-500">Full control: reports, add/delete vehicles, manage users.</p></div>
            <div className="bg-white p-7 rounded-2xl min-w-[220px] shadow"><i className="fas fa-chart-line text-3xl text-orange-500"></i><h3 className="font-bold text-xl mt-3">Accountant</h3><p className="text-sm text-slate-500">Daily entries, cash book, Bilty creation & printing.</p></div>
            <div className="bg-white p-7 rounded-2xl min-w-[220px] shadow"><i className="fas fa-mobile-alt text-3xl text-orange-500"></i><h3 className="font-bold text-xl mt-3">Driver App</h3><p className="text-sm text-slate-500">Update trip status, upload POD, view assigned trips.</p></div>
          </div>
          <button className="mt-10 bg-slate-800 text-white px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-slate-900"><i className="fas fa-sign-in-alt"></i> Access Your Dashboard →</button>
        </div>
      </section>

      {/* CTA Demo */}
      <section id="demo" className="py-16 px-6 md:px-8">
        <div className="max-w-7xl mx-auto bg-slate-900 text-white rounded-3xl text-center py-16 px-6">
          <i className="fas fa-chalkboard text-5xl text-orange-500 mb-4"></i>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to digitize your transport business?</h2>
          <p className="max-w-lg mx-auto mt-3 text-slate-300">Join 500+ transport companies using RMR Logistics Pro. Get vehicle-wise reports, automated accounting, Bilty printing, petrol pump tracking — all in one.</p>
          <button className="mt-6 bg-orange-500 text-white px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-orange-600"><i className="fas fa-calendar-check"></i> Book a Free Demo</button>
          <p className="text-xs text-slate-400 mt-5">No credit card required | Setup in 2 days | Data migration support</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-stone-200 text-center text-slate-500">
        <div className="max-w-7xl mx-auto px-6">
          <p>© 2025 RMR Logistics Pro — Complete Transport & Logistics Management Software. All Rights Reserved.</p>
          <div className="flex justify-center gap-5 mt-4">
            <a href="#" className="hover:text-orange-500"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="hover:text-orange-500"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-orange-500"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:text-orange-500"><i className="fas fa-envelope"></i> support@rmrlogisticspro.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;